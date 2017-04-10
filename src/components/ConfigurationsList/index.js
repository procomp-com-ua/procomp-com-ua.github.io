import React, { PropTypes } from "react"
import Shuffle from "react-shuffle"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Button from "../../components/Button"
import styles from "./index.css"

class ConfigurationsList extends React.Component {

  static contextTypes = {
    collection: PropTypes.array.isRequired,
  };

  constructor (props, { collection }) {
    super(props);
    const configurations = enhanceCollection(collection, {
      filter: { layout: "Configuration" },
      sort: "price",
      reverse: true,
    });
    this.state = {
      allConfigurations: configurations,
      children: configurations,
      filtered: false    
    }
  }  

  showAll = () => {
    this.setState({
        children: this.state.allConfigurations,
        filtered: false
      });
  }

  filterFor = (tag) => {
      let newChildren = this.state.allConfigurations.filter(function(child){
        if (child.tags && child.tags.includes(tag)) {
          return child
        }
      });
      this.setState({
        children: newChildren,
        filtered: true
      });
  }

  render() {
    return (
      <div className={ styles.demo }>
        <Button onClick={this.showAll}>Все</Button>
        <Button onClick={() => this.filterFor("3d")}>Для 3D</Button>
        <Button onClick={() => this.filterFor("Photoshop")}>Для Photoshop</Button>
        <Button onClick={() => this.filterFor("VideEditing")}>Для видеообработки</Button>
        <Button onClick={() => this.filterFor("Programming")}>Для программирования</Button>
        <Button onClick={() => this.filterFor("WebServer")}>Веб-сервер</Button>
        <Shuffle duration={300} fade={false}>
          {this.state.children.map(function(page){
            return (
              <div className={ styles.tile } key={page.title}>
                <img
                  src={"http://placehold.it/100x100&text=" + page.title} />
              </div>
            )
          })}
        </Shuffle>
      </div>
    )
  }
}

export default ConfigurationsList
