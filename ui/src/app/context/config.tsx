/*
 * The ConfigProvider fetches the runtime configuration
 * from the backend and provides it through useContext.
 */

import axios from 'axios';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useErrorHandler } from './errors';

export interface Config {
  routes_columns: Record<string, string>,
  routes_columns_order: string[],
  neighbors_columns: Record<string, string>,
  neighbors_columns_order: string[],
  lookup_columns: Record<string, string>,
  lookup_columns_order: string[],
  prefix_lookup_enabled: boolean,
  content: Record<string, string>,
  noexport_load_on_demand: boolean, // we have to assume this
  // otherwise fetch will start.
  rpki: {
    enabled: boolean,
  },

  bgp_communities: Record<string, string>,

  blackholes: Record<string, string>, // Map blackholes to routeservers
  asns: Record<string, string>, // Map ASNs to routeservers (for future use)
}

const initialState: Config = {
  routes_columns: {},
  routes_columns_order: [],
  neighbors_columns: {},
  neighbors_columns_order: [],
  lookup_columns: {},
  lookup_columns_order: [],
  prefix_lookup_enabled: false,
  content: {},
  noexport_load_on_demand: true, // we have to assume this
  // otherwise fetch will start.
  rpki: {
    enabled: false,
  },

  bgp_communities: {},

  blackholes: {}, // Map blackholes to routeservers
  asns: {}, // Map ASNs to routeservers (for future use)
};

export const ConfigContext = createContext<Config | null>(null);
export const useConfig = () => useContext(ConfigContext)!;

export interface ConfigProviderProps {
  children: ReactNode,
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState(initialState);
  const handleError = useErrorHandler();

  // OnLoad: once
  useEffect(() => {
    // Fetch config from backend
    axios.get<Config>('/api/v1/config').then(
      ({ data }) => setConfig(data),
      (error) => handleError(error)
    );
  }, [handleError]);

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}


export interface RoutesTableConfig {
  columns: string[];
  columnsOrder: string;
}

/**
 * RoutesTableConfigProvider
 */
const RoutesTableConfigContext = createContext<RoutesTableConfig | null>(null);

export const useRoutesTableConfig = () => useContext(RoutesTableConfigContext);

export type RoutesTableConfigProviderProps = {
  children: ReactNode;
} & RoutesTableConfig;

/**
 * Configure routes columns and columns oder
 */
export const RoutesTableConfigProvider = ({
  children,
  columns,
  columnsOrder
}: RoutesTableConfigProviderProps) => {
  const context = {
    columns,
    columnsOrder,
  };
  return (
    <RoutesTableConfigContext.Provider value={context}>
      {children}
    </RoutesTableConfigContext.Provider>
  );
}


