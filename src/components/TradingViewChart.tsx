"use client";

import { useEffect } from 'react';

export interface TradingViewWidget {
  new (options: {
    container_id: string;
    width: string | number;
    height: string | number;
    symbol: string;
    interval: string;
    timezone: string;
    theme: string;
    style: string;
    locale: string;
    toolbar_bg: string;
    enable_publishing: boolean;
    allow_symbol_change: boolean;
    hide_side_toolbar: boolean;
  }): void;
}

declare global {
  interface Window {
    TradingView?: {
      widget: TradingViewWidget;
    };
  }
}

const TradingViewChart = () => {
  useEffect(() => {
    const scriptId = "tradingview-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;

      script.onload = () => initializeChart();
      document.body.appendChild(script);
    } else {
      initializeChart();
    }

    function initializeChart() {
      if (window.TradingView && window.TradingView.widget) {
        new window.TradingView.widget({
          container_id: "tradingview-chart",
          width: "100%",
          height: 500,
          symbol: "BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          hide_side_toolbar: false,
        });
      }
    }
  }, []);

  return <div id="tradingview-chart" className="w-full h-[500px]"></div>;
};

export default TradingViewChart;