import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import TimeAgo from 'javascript-time-ago'
import id from 'javascript-time-ago/locale/id.json'
TimeAgo.addDefaultLocale(id)