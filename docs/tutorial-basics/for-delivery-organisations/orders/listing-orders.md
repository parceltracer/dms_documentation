---
id: listing-orders
title: Listing Orders
description: Learn how to list and search through orders
sidebar_position: 3
---
import ReactPlayer from 'react-player'

## Introduction

The orders page provides you with a table listing all orders your orders.

This table is also supported with a search and filter sections so that you can narrow down the order list based on specific criteria.

The following sections help discover the different functionalities that can help you list and search through your orders efficiently.

## Pagination

By default, the table shows you only 10 orders at a time.\
You can check the next (or previous) 10 orders by clicking the right (or left) arrow at the bottom right corner of the table.\
You can also change the number of orders that the table shows in 1 page by tweaking the page size at the bottom right corner.\
You are not able to view more than 250 orders at the same time.

The pagination controls are shown in the following figure:

![alt text](./media/pagination-controls.png)

## Searching and Filtering

Search and filtering controls allow you to narrow down the orders table based on a specific criteria.

The following sub-sections teach you how to apply filters and search queries.

### Search Controls

You are capable of searching based on the following fields:
- order id
- reference number
- customer name
- customer phone

A search query is composed of 3 items:
- search field: one of the 4 afore-mentioned fields
- matching type: either **contains** (for partial search) or **equals** (for exact search)
- search value

As an example, if you wish to search for the orders whose order id contains 122, you would do the following search:\
`Order_id` + `contains` + `122`\
Then you click the search button to obtain the result.

If you want to get the orders whose customer has the phone number `70787463`, you would do the following query:\
`Customer_phone` + `equals` + `70787463`\
Then you click the search button to obtain the result.

The video below shows you how you can search by order id and by customer name.

<div className="player-wrapper">
    <ReactPlayer className="react-player" width="100%"
      height="100%" url='https://youtu.be/eY7PJq-I_Yk' />
</div>

### Date Controls

You can narrow down the orders list to a specific period by specifying a range for creation dates.]

### Filtering Controls

Filtering controls can help combine multiple filters in order to show orders that adhere to specific criteria.

The possible criterion that you can combine are the following:
- Driver: show orders that are attached to a specific driver
- Merchant: show orders that are attached to a specific merchant
- Region: show orders that are sent to a specific region and/or governorate
- Delivery State: show orders with a specific delivery state
- Payment State: show orders with a specific payment state

Here is how you can apply these filters:
- To filter by driver, type `driver:` and then start typing the driver name or phone number
- To filter by merchant, type `merchant:` and then start typing the merchant name or phone number
- To filter by region, type `district:` (or `governorate:`) and then start typing the district (or governorate) name
- To filter by delivery state, type `delivery_state:` and then choose the delivery state from the dropdown list
- To filter by payment state, type `payment_state:` and then choose the payment state from the dropdown list

Once you start typing into the filters field, you will get some suggestions for filters that match your query.

:::tip Hint
When typing your filter value, you don't have to write the exact full name of the driver, merchant, region, etc. 

You write part of the name and the dropdown will do its best to autocomplete your filter.

For example, if you write `driver:sam`, the dropdown will show you filters for all drivers whose names contain `sam`.
:::

#### Filtering Example

Suppose you are interested in listing the orders that are **Delivered** sent by merchant **Merch-X** to customers in **Baabda**.

In this case, you should apply the following filters:

`merchant:Merch-X`, `district:baabda`, `delivery_state:delivered`.

The following video shows you how easy it is to apply these filters.

<div className="player-wrapper">
    <ReactPlayer className="react-player" width="100%"
      height="100%" url='https://youtu.be/qafc5el-Ldg' />
</div>

<br/>
:::tip Hint
Search, date and filters controls can be combined together to form complex filtering and searching. 

For example, you can look for orders that:
- are sent by merchant X
- are currently in transit
- were created between date d1 and date d2
- are with driver Y

In short, whatever you put in the search, date and filters get combined by the app to produce the correct result that adheres to what you are looking for.
:::

## Tracking Links

Each order has a tracking link that is automatically assigned by the parcel tracer app.

You can get the tracking link of an order by clicking the copy-link button in the orders table as shown in the figure below

![alt text](./media/copy-tracking-link.png)

You can then share this tracking link with the customer or the merchant.