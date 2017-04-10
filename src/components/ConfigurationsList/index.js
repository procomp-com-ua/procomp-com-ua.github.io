import React from "react"
import Shuffle from "react-shuffle"

import Button from "../../components/Button"
import styles from "./index.css"

const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z']

class ConfigurationsList extends React.Component {
  state =  {
      children: alphabet,
      filtered: false    
  }
  showAll = () => {
    this.setState({
        children: alphabet,
        filtered: false
      });
  }
  filterFor3d = () => {
    if (this.state.filtered === false) {
      let newChildren = this.state.children.filter(function(child,index){
        if (index % 2 ===0) {
          return child
        }
      });
      this.setState({
        children: newChildren,
        filtered: true
      });
    } else {
      this.setState({
        children: alphabet,
        filtered: false
      });
    }
  }
  filterForPhotoshop = () => {

  }
  render() {
    return (
      <div className={ styles.demo }>
        <Button type="button" onClick={this.showAll}>Все</Button>
        <Button type="button" onClick={this.filterFor3d}>Для 3D</Button>
        <Button type="button" onClick={this.filterForPhotoshop}>Для Photoshop</Button>
        <Button type="button" onClick={this.filterForPhotoshop}>Для видеообработки</Button>
        <Shuffle duration={300} fade={false}>
          {this.state.children.map(function(letter){
            return (
              <div className={ styles.tile } key={letter}>
                <img
                  src={"http://placehold.it/100x100&text=" + letter} />
              </div>
            )
          })}
        </Shuffle>
      </div>
    )
  }
}

export default ConfigurationsList
