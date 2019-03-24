import { connectModule } from '../../lib/moduleContext';
import TodosPanel from '../../components/TodosPanel';

export default connectModule(portal => portal.todos)(TodosPanel);