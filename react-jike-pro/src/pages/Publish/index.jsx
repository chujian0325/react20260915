import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import '@wangeditor/editor/dist/css/style.css'
import { useState, useEffect } from 'react'
import { getChannelApI, addArticles, getArticleByIdAPI } from '../../apis/article'
import { useChannels } from '../../hooks/useChannels'
import { useSearchParams } from 'react-router-dom'
const { Option } = Select

const Publish = () => {
  const [editor, setEditor] = useState(null)
  const [html, setHtml] = useState('')
  useEffect(() => {
    return () => {
      if (editor) editor.destroy()

    }
  }, [editor])
  const { channelList } = useChannels()

  const onFinish = (values) => {
    if (imageList.length !== imageType) {
      message.error('封面类型与图片数量不匹配')
      return
    }
    console.log('Success:', values, html)
    const { title, channel_id, type } = values
    const res = addArticles({
      title,
      content: html,
      cover: {
        type: type,
        images: imageList.map((item) => item.response.data.url)
      },
      channel_id
    })
    console.log('提交', res)
    message.success('发布成功')
  }

  // 上传图片
  const [imageList, setImageList] = useState([])
  const onUploadChange = (info) => {
    console.log('上传图片',info)
      setImageList(info.fileList)
  }

  const [imageType, setImageType] = useState(1)
  const changType = (e) => {
    console.log('切换封面', e.target.value)
    setImageType(e.target.value)

  }

  // 获取实例
  const [form] = Form.useForm()
  // 数据回填
  const [searchParams] = useSearchParams()
  const articleId = searchParams.get('id')
  console.log('文章id', articleId)
  useEffect(() => {
    async function getArticleDetail() {
      const res = await getArticleByIdAPI(articleId)
      console.log('文章详情', res)
      // 回显表单：调用Form组件实例方法setFieldsValue回显数据
      form.setFieldsValue({
        ...res.data,
        type: res.data.cover.type,
      })
      // 回显图片列表
      setImageType(res.data.cover.type)
      // 回显图片
      setImageList(res.data.cover.images.map((item) => ({ url: item})))
      console.log('回显图片', imageList)
      // 设置富文本回显
      setHtml(res.data.content)
    }
    // 调用详情
    getArticleDetail()
  }, [articleId])
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {
                channelList.map(item=>{
                  return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
              }
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={changType}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* listType：决定选择文件样式
                showUploadList：是否展示上传列表
             */}
            {
              imageType > 0 && <Upload
                maxCount={imageType}
                name="image"
                listType="picture-card"
                showUploadList
                action={'https://geek.itheima.net/v1_0/upload'}
                onChange={onUploadChange}
                fileList={imageList}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            }
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容',
              validator: (_, value) => {
                if (value === '<p><br></p>') {
                  return Promise.reject(new Error('请输入文章内容'))
                }
                return Promise.resolve()
              }
             }]}
          >
            {/* 富文本编辑器 */}
            <div>
              <Toolbar editor={editor} mode="simple" />
              <Editor
                value={html || ''}
                onChange={editorInst => {
                  const htmlStr = editorInst.getHtml()
                  setHtml(htmlStr)
                }}
                onCreated={setEditor}
                mode="simple"
                placeholder="请输入文章内容..."
                style={{ height: '300px' }}
              />
            </div>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish