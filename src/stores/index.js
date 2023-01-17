import { createPinia} from 'pinia'

const pinia = createPinia()
export * from "./modules/loading";
export * from "./modules/search";
export default pinia