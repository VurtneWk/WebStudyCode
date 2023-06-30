// EventBus.js

import { createApp } from 'vue';

const EventBus = createApp({});
EventBus.config.globalProperties.eventBus = EventBus;

export default EventBus;
