import { NavBar, DatePicker } from 'antd-mobile'
import { useState, useMemo, useEffect } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import './index.scss'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import DayBill from './components/DayBill'
const Month = () => {
  // 按月数据分组
  const billList = useSelector((state) => state.bill.billList)
  const monthGroup = useMemo(() => {
    // return出去计算之后的值
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])
  console.log(monthGroup)
  
  // 控制弹窗的打开和关闭
  const [dateVisible, setDateVisible] = useState(false)

  // 控制时间显示
  const [currentDate, setCurrentDate] = useState(()=>{
    return dayjs(new Date()).format('YYYY-MM')
  })
  const [currentMonthList, setCurrentMonthList] = useState([])
  const monthResult = useMemo(()=>{
    // 支出、出入、结余
    const pay = currentMonthList.filter((item) => item.type === 'pay').reduce((acc, cur) => acc + cur.money, 0)
    const income = currentMonthList.filter((item) => item.type === 'income').reduce((acc, cur) => acc + cur.money, 0)
    return {
      pay,
      income,
      total: pay + income
    }
  }, [currentMonthList])
  // 确认按钮
  const onConfirm = (date) => {
    // 渲染数据
    const formatDate = dayjs(date).format('YYYY-MM')
    // 关闭日期弹窗
    setDateVisible(false)
    // 展示选择时间
    setCurrentDate(formatDate)
    
    setCurrentMonthList(monthGroup[formatDate])



  }

  // 当月按照日来分组
  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
    const keys = Object.keys(groupData)
    return {
      groupData,
      keys
    }
  }, [currentMonthList])
  console.log('dayGroup',dayGroup)
  // 初始化的时候，把当前月份的数据渲染到页面
  useEffect(() => {
    const nowDate = dayjs(new Date()).format('YYYY-MM')
    // 边界值控制
    if (monthGroup[nowDate]){
      setCurrentMonthList(monthGroup[nowDate])
    }
  }, [monthGroup])
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={()=>{setDateVisible(true)}}>
            <span className="text">
              {currentDate}月账单
            </span>
            <span className={classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
        {/* 单日列表统计 */}
        {
          dayGroup.keys.map(key => {
            return <DayBill
              key={key}
              date={key}
              billList={dayGroup.groupData[key]}
            />
          })
        }
      </div>
    </div >
  )
}

export default Month