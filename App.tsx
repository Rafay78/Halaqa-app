import NavigationStack from "./src/navigation/NavigationStack";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { AuthProvider } from './src/contexts/AuthContext';

const queryClient = new QueryClient({});


export default function App() {
  return (
<>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationStack />
          <Toast />
        </QueryClientProvider>
      </AuthProvider>

    </>
)
}
