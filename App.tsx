import NavigationStack from "./src/navigation/NavigationStack";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';

const queryClient = new QueryClient({});


export default function App() {
  return (
<>
      <QueryClientProvider client={queryClient}>
        <NavigationStack />
      </QueryClientProvider>
    </>
)
}
