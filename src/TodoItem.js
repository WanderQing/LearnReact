import { DeleteTwoTone } from '@ant-design/icons';
import { Tooltip, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import styles from './todo-list.module.scss';
import colors from './map/color-map';

const TodoItem = ({ item, deleteItem, checkItem }) => (
  <div className={styles['todo-item']}>
    <Checkbox
      className={styles['to-item__label']}
      value={item.checked}
      onChange={(e) => checkItem(item.id, e.target.checked)}
    >
      {item.text}
    </Checkbox>
    <Tooltip title="删除">
      <DeleteTwoTone
        onClick={() => deleteItem(item.id)}
        className={styles.icon}
        title="删除"
        twoToneColor={colors.delete}
      />
    </Tooltip>
  </div>
);

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  checkItem: PropTypes.func.isRequired,
};
export default TodoItem;
