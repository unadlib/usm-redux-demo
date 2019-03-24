import { connectModule } from '../../lib/moduleContext';
import CounterPanel from '../../components/CounterPanel';

export default connectModule(portal => portal.counter)(CounterPanel);