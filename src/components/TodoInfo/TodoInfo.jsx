import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo: { user, title, completed } }) => (
  <li className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <title className="TodoInfo__title">{title}</title>
    {user && <UserInfo user={user} />}
  </li>
);
