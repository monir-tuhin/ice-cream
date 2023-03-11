import React, {Component} from 'react';
import classes from './IceCreamBuilder.module.css'
import IceCream from '../../components/IceCream/IceCream'
import Builder from '../../components/Builder/Builder'

export default class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      lemon: 40,
      orange: 60,
      strawberry: 80
    },
    scoops: [],
    totalPrice: 0
  }

  componentDidMount() {
    this.getIceCreamItems();
  }

  getIceCreamItems() {
    fetch('https://react-ice-cream-9c598-default-rtdb.asia-southeast1.firebasedatabase.app/items.json')
      .then(data => data.json())
      .then(res => {
        this.setState({
          items: res,
        })
      })
  }

  addScoop = (scoop) => {
    const {scoops, items} = this.state;
    const workingScoops = [...scoops];
    workingScoops.push(scoop);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop]
      }
    })
  }

  removeScoop = (scoop) => {
    const {scoops, items} = this.state;
    const workingScoops = [...scoops];
    const scoopIndex = workingScoops.findIndex(e => e === scoop);
    workingScoops.splice(scoopIndex, 1);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice - items[scoop]
      }
    })
  }

  render() {
    const {items, totalPrice, scoops} = this.state;
    return(
      <div className={["container", classes.container].join(" ")}>
        <IceCream scoops={scoops}/>
        <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoops={scoops}/>
      </div>
    )
  }
}
