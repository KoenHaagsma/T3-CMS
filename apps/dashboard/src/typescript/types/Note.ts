import User from './User';

type Note = {
  id: string;
  message: string;
  userId: string;
  user: User;
  finished: boolean;
};

export default Note;
