declare module 'react-simple-maps' {
  import { ReactNode } from 'react';

  export interface SimpleGeography {
    rsmKey?: string;
    properties?: {
      [key: string]: unknown;
    };
    [key: string]: unknown;
  }

  export interface ComposableMapProps {
    width?: number;
    height?: number;
    projection?: string;
    projectionConfig?: {
      [key: string]: unknown;
    };
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string;
    onError?: (error: Error) => void;
    children: (props: { geographies: SimpleGeography[] }) => ReactNode;
  }

  export interface GeographyProps {
    geography: SimpleGeography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
    };
    children: (props: { 
      geographies: SimpleGeography[];
      geography: SimpleGeography;
      path: string;
    }) => ReactNode;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
}
