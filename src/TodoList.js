import React from 'react';
import { Button, Input, Divider } from 'antd';
import TodoItem from './TodoItem';
import styles from './todo-list.module.scss';
import IDGenerator from './utils/IDGenerator';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: '',
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.inputItem = this.inputItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      this.addItem();
    }
  }

  addItem() {
    const { value } = this.state;
    if (value.trim() === '') return;
    this.setState((state) => ({
      list: [...state.list, { id: IDGenerator.nextId(), text: value }],
    }));
    this.setState({ value: '' });
  }

  deleteItem(id) {
    this.setState((state) => ({
      list: state.list.filter((item) => item.id !== id),
    }));
  }

  inputItem(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { list, value } = this.state;
    return (
      <div className={styles['todo-list']}>
        <div className={styles['operate-area']}>
          <Input
            className={styles['input-item']}
            placeholder="请输入待办事项"
            onChange={this.inputItem}
            value={value}
            onKeyUp={this.handleEnter}
          />
          <Button className={styles['button-add']} type="primary" onClick={this.addItem}>添加</Button>
        </div>
        <Divider />
        <div className={styles['list-area']}>
          {
            list.length > 0
              ? list.map((item) => (
                <TodoItem
                  key={item.id}
                  item={item}
                  deleteItem={this.deleteItem}
                />
              ))
              : <span>暂无数据</span>
          }
        </div>

      </div>
    );
  }
}
export default TodoList;
