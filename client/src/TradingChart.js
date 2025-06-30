import React, { useEffect, useRef } from 'react';

export default function TradingChart({ signals }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = () => {
      /* global TradingView */
      new TradingView.widget({
        symbol: 'AAPL',
        container_id: container.current.id,
        interval: '1',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        withdateranges: true,
        hideideas: true,
        studies: [],
      });
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!window.TradingView || !window.TradingView.onready) return;
    window.TradingView.onready(() => {
      signals.forEach((sig) => {
        const isBuy = sig.type === 'buy';
        const label = {
          time: sig.time / 1000,
          color: isBuy ? 'green' : 'red',
          text: isBuy ? 'Compra' : 'Venta',
          textColor: 'white',
          position: isBuy ? 'belowBar' : 'aboveBar',
        };
        window.tvWidget.createShape(label);
      });
    });
  }, [signals]);

  return <div id="tv_chart_container" ref={container} style={{ height: 500 }} />;
}
