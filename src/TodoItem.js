import { DeleteTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import styles from './todo-list.module.scss';
import colors from './map/color-map';

const TodoItem = ({ item, deleteItem }) => (
  <div className={styles['todo-item']}>
    <span>{item.text}</span>
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
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
export default TodoItem;
