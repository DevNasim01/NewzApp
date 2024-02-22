import { defineConfig } from 'vite'; // Import defineConfig from 'vite'
import react from '@vitejs/plugin-react'; // Import the react plugin

export default defineConfig({
  plugins: [react()], // Add the react plugin to the plugins array
  base: './' // Set the base option to use relative paths
});
