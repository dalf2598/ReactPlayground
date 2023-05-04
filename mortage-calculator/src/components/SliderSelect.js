import React, {Fragment} from 'react'
import SliderComponent from './common/SliderComponent'

export default function SliderSelect({data, setData}) {
  return (
    <Fragment>
        <SliderComponent 
        label='Home value'
        defaultValue={data.homeValue}
        value={data.homeValue} 
        min={1000} 
        max={10000}
        step={100}
        onChange={(e, value) => setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8
        })}
        unit='$'
        amount={data.homeValue}
        />
        <SliderComponent 
        label='Down Payment'
        defaultValue={data.downPayment}
        value={data.downPayment} 
        min={0} 
        max={data.homeValue} 
        step={100}
        onChange={(e, value) => setData({
            ...data,
            downPayment: value,
            loanAmount: data.homeValue - value 
        })}
        unit='$'
        amount={data.downPayment}
        />
        <SliderComponent 
        label='Loan Amount'
        defaultValue={data.loanAmount}
        value={data.loanAmount} 
        min={0} 
        max={data.homeValue}
        step={100}
        onChange={(e, value) => setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value
        })}
        unit='$'
        amount={data.loanAmount}
        />
        <SliderComponent 
        label='Interest Rate'
        defaultValue={data.interestRate}
        value={data.interestRate} 
        min={2} 
        max={15}
        step={1}
        onChange={(e, value) => setData({
            ...data,
            interestRate: value
        })}
        unit='%'
        amount={data.interestRate}
        />
    </Fragment>
  )
}
