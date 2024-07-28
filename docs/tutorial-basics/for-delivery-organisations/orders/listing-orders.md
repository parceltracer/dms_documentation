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


