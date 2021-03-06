import { provide, inject, type ComponentInternalInstance } from 'vue';
import type { DynamicTableInstance } from './../typing';

const key = Symbol('dynamic-table');

export function createTableContext(instance: ComponentInternalInstance) {
  provide(key, instance.proxy);
}

export function useTableContext() {
  return inject(key) as DynamicTableInstance;
}
