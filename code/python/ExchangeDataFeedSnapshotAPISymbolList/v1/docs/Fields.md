# Fields

All available fields in service. FID = Field ID Number.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **str** | Field ID # 20. Exchange ISO-Code. Enumeration in Data Service Manual. | [optional] 
**product** | **str** | Field ID # 4. Product identifier. Enumeration in Data Service Manual. | [optional] 
**bid** | **float** | Field ID # 509. Current bid price | [optional] 
**bid_date** | **str** | Field ID # 386. Current bid date | [optional] 
**bid_time** | **int** | Field ID # 385. Current bid time | [optional] 
**bid_vol** | **int** | Field ID # 505. Current bid size | [optional] 
**bid_tick** | **str** | Field ID # 518. Current bid tick direction. Enumeration in Data Service Manual. | [optional] 
**bid_close** | **float** | Field ID # 648. Official Closing Bid | [optional] 
**bid_close_date** | **str** | Field ID # 1062. Official Closing Bid Date | [optional] 
**bid_close_vol** | **int** | Field ID # 296. Official Closing Bid Volume | [optional] 
**bid_exch** | **str** | Field ID # 506. Exchange of the current bid price. Enumeration in Data Service Manual. | [optional] 
**ask** | **float** | Field ID # 609. Current ask price | [optional] 
**ask_date** | **str** | Field ID # 388. Current ask date | [optional] 
**ask_time** | **int** | Field ID # 387. Current ask time | [optional] 
**ask_vol** | **int** | Field ID # 605. Current ask size | [optional] 
**ask_close** | **float** | Field ID # 649. Official Closing ask | [optional] 
**ask_close_date** | **str** | Field ID # 1064. Official Closing ask Date | [optional] 
**ask_close_vol** | **int** | Field ID # 297. Official Closing ask Volume | [optional] 
**ask_exch** | **str** | Field ID # 606. Exchange of the current ask price.  Enumeration in Data Service Manual. | [optional] 
**short_sale_indicator** | **int** | Field ID # 277. Flag to indicate if a security is restricted from being sold short | [optional] 
**quote_condition** | **str** | Field ID # 38. Current Quote Condition.  Enumeration in Data Service Manual. | [optional] 
**last_price** | **float** | Field ID # 50. Official last trade price | [optional] 
**last_date** | **str** | Field ID # 384. Last Date | [optional] 
**last_time** | **int** | Field ID # 383. Official last traded time | [optional] 
**last_vol** | **int** | Field ID # 31. Official last traded volume | [optional] 
**last_tick** | **str** | Field ID # 25. Official last tick. Enumeration in Data Service Manual. | [optional] 
**official_close** | **float** | Field ID # 526. Official Close/Close Range 1 Price | [optional] 
**official_close_time** | **int** | Field ID # 1065. Official Close/Close Range 1 Time | [optional] 
**last_exch** | **str** | Field ID # 33. Official last traded exchange. Enumeration in Data Service Manual. | [optional] 
**settlement** | **float** | Field ID # 815. Settle Price | [optional] 
**traded_price** | **float** | Field ID # 912. Last traded Price | [optional] 
**traded_date** | **str** | Field ID # 868. Last traded Date | [optional] 
**traded_time** | **int** | Field ID # 916. Last traded Time | [optional] 
**traded_vol** | **int** | Field ID # 918. Last traded Volume | [optional] 
**traded_condition** | **str** | Field ID # 1098. Last traded trade condition | [optional] 
**net_change** | **float** | Field ID # 662. Official last change | [optional] 
**percent_change** | **float** | Field ID # 816. Official last percentage change | [optional] 
**premkt_price** | **float** | Field ID # 1019. Unofficial last premarket trade price | [optional] 
**premkt_time** | **int** | Field ID # 1075. Unofficial last premarket traded time | [optional] 
**premkt_vol** | **int** | Field ID # 1832. Unofficial last premarket traded volume | [optional] 
**premkt_c_vol** | **int** | Field ID # 1836. Unofficial last premarket cumulative volume | [optional] 
**postmkt_price** | **float** | Field ID # 2029. Unofficial last post market trade price | [optional] 
**postmkt_time** | **int** | Field ID # 1076. Unofficial last post market traded time | [optional] 
**postmkt_vol** | **int** | Field ID # 1860. Unofficial last post market traded volume | [optional] 
**postmkt_cvol** | **int** | Field ID # 1864. Unofficial last post market cumulative volume | [optional] 
**offbook_cum_vol** | **int** | Field ID # 528. Off Book Cumulative Volume | [optional] 
**official_bid_close** | **float** | Field ID # 448. The bid close price of today | [optional] 
**official_ask_close** | **float** | Field ID # 476. The ask close price of today | [optional] 
**mid_date** | **str** | Field ID # 136. Current mid date | [optional] 
**mid_time** | **int** | Field ID # 135. Current mid price time | [optional] 
**cvol** | **int** | Field ID # 132. Cumulative volume | [optional] 
**turnover** | **float** | Field ID # 341. Turnover | [optional] 
**vwap** | **float** | Field ID # 780. Volume Weighted Average Price | [optional] 
**trade_count** | **int** | Field ID # 267. Cumulative trade count | [optional] 
**block_trade_count** | **int** | Field ID # 269. Cumulative block count | [optional] 
**block_cvol** | **int** | Field ID # 271. Cumulative block volume | [optional] 
**prev_close** | **float** | Field ID # 208. Previous trading days Close | [optional] 
**close_date** | **str** | Field ID # 1051. Previous trading days Closing Date | [optional] 
**prev_close_unadj** | **float** | Field ID # 892. Unadjusted Previous trading days Close | [optional] 
**prev_close_2** | **float** | Field ID # 1172. Previous trading days Close  late rollover[1] | [optional] 
**prev_close_unadj_2** | **float** | Field ID # 1176. Unadjusted Previous trading days Close  late rollover | [optional] 
**lower_trading_band** | **float** | Field ID # 1093. Lower trading band | [optional] 
**upper_trading_band** | **float** | Field ID # 1087. Upper trading band | [optional] 
**buy_imbalance** | **int** | Field ID # 495. NYSE buy imbalance | [optional] 
**sell_imbalance** | **int** | Field ID # 496. NYSE sell imbalance | [optional] 
**nas_buy_imbalance** | **int** | Field ID # 948. NAS buy imbalance | [optional] 
**nas_sell_imbalance** | **int** | Field ID # 949. NAS sell imbalance | [optional] 
**open** | **float** | Field ID # 158. The Open Range 1 or Open Price | [optional] 
**high** | **float** | Field ID # 107. Current high for the day | [optional] 
**low** | **float** | Field ID # 307. Current low for the day | [optional] 
**venue** | **str** | Field ID # 530. Venue | [optional] 
**buy_id** | **str** | Field ID # 1820. Buy Id | [optional] 
**sell_id** | **str** | Field ID # 1824. Sell Id | [optional] 
**auto_trade_vwap** | **float** | Field ID # 637. VWAP including only order book (automatic) trades | [optional] 
**auto_trade_cvol** | **int** | Field ID # 635. Cumulative Volume calculated on all automated trading volumes for order-based segments | [optional] 
**auto_trade_count** | **int** | Field ID # 636. Trade Quantity including only order book (automatic) trades | [optional] 
**ex_date_status** | **str** | Field ID # 531. Ex-Date Status | [optional] 
**premkt_net_change** | **float** | Field ID # 896. Net change in pre-market session(US stocks only) | [optional] 
**premkt_percent_change** | **float** | Field ID # 897. Percent change in pre-market session(US stocks only) | [optional] 
**closing_vol** | **int** | Field ID # 1345. Volume of the closing trade | [optional] 
**primary_market** | **str** | Field ID # 1517. FactSet Exchange Code of primary market for instrument. Determined by highest trading volume over a 3-day calendar period | [optional] 
**iso_country_exchange** | **str** | Field ID # 1621. Three Letter Country Code from ISO-3166 | [optional] 
**premkt_exch** | **str** | Field ID # 1743. Premarket Exchange. Enumeration in Data Service Manual.  | [optional] 
**postmkt_exch** | **str** | Field ID # 1744. Post Market Exchange. Enumeration in Data Service Manual. | [optional] 
**fref_security_type** | **str** | Field ID # 1751. The Security type returned by FREF_SECURITY_type | [optional] 
**security_sub_type** | **str** | Field ID # 1762. Sub type of the security populated for funds right now | [optional] 
**postmkt_net_change** | **float** | Field ID # 1881. Post Market Net Change | [optional] 
**postmkt_percent_change** | **float** | Field ID # 1882. Post Market Percent Change.  | [optional] 
**isin** | **str** | Field ID # 12. ISIN | [optional] 
**cusip** | **str** | Field ID # 14. CUSIP | [optional] 
**sedol** | **str** | Field ID # 15. SEDOL | [optional] 
**description** | **str** | Field ID # 8. Security Description | [optional] 
**shares_outstanding** | **float** | Field ID # 29. Total number of shares outstanding | [optional] 
**price_currency** | **str** | Field ID # 62. Price currency code | [optional] 
**security_status** | **str** | Field ID # 2800. Security Status or Halt Indicator. Enumeration in Data manual | [optional] 
**gmt_offset** | **int** | Field ID # 389. GMT Offset in Minutes | [optional] 
**market_segment** | **str** | Field ID # 650. Market segment | [optional] 
**market_sector** | **str** | Field ID # 651. Market sector | [optional] 
**period** | **str** | Field ID # 633. Period | [optional] 
**country_code** | **str** | Field ID # 652. ISO Country code | [optional] 
**financial_status** | **int** | Field ID # 1896. Financial Status Enumeration Table | [optional] 
**factset_industry** | **str** | Field ID # 722. FactSet Industry Classification | [optional] 
**factset_sector** | **str** | Field ID # 723. FactSet Sector Classification | [optional] 
**halt_info** | **int** | Field ID # 1414. Halt Status | [optional] 
**homepage** | **str** | Field ID # 724. Company Homepage | [optional] 
**halt_description** | **str** | Field ID # 1184. Halt description | [optional] 
**feed_currency** | **str** | Field ID # 1182. Currency the Exchange sends the prices to FactSet in | [optional] 
**country_name** | **str** | Field ID # 1190. Name of Country | [optional] 
**order_lot_size** | **int** | Field ID # 427. Number of securities in a lot | [optional] 
**trade_lot_size** | **int** | Field ID # 1335. The minimum number of lots required to trade | [optional] 
**tick_size** | **float** | Field ID # 1499. Tick Size | [optional] 
**tick_group** | **str** | Field ID # 1507. Tick Group | [optional] 
**tick_pilot_eff_date** | **str** | Field ID # 1508. Tick Pilot effective day | [optional] 
**avg_30_day_vol** | **float** | Field ID # 709. Average cumulative volume for last 30 days | [optional] 
**avg_5_day_vol** | **float** | Field ID # 719. Average cumulative volume over last 5 trading days | [optional] 
**high_52_week** | **float** | Field ID # 767. 52 Week High Price | [optional] 
**low_52_week** | **float** | Field ID # 768. 52 Week Low Price | [optional] 
**high_52_week_date** | **str** | Field ID # 1220. 52 Week High Price Date | [optional] 
**low_52_week_date** | **str** | Field ID # 1295. 52 Week Low Price Date | [optional] 
**trade_condition** | **str** | Field ID # 174. Trade Condition | [optional] 
**total_return_3_m** | **float** | Field ID # 746. 3 Month return for US mutual funds | [optional] 
**total_return_52_w** | **float** | Field ID # 747. 52-Week Total Return for US mutual funds | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

