---
id: main-dashboard
title: Main Dashboard
description: Main Dashboard
slug: /org/main-dashboard
sidebar_position: 2
---
import ReactPlayer from 'react-player'

:::danger Attention
The Home Page is only accessibe to organisation accounts.\
If you are an employee, kindly skip to the next page.
:::

## Introduction

The home page represents a bird's-eye view to the status of all delivery operations in your company.

It includes six widgets:
- Profit report
- Delivery States
- Payments States
- Delivered Orders History
- Targetted Regions

Here is how it would look like:

![home page image](media/home-page.png)

The next sections explain what each widget means and how it can be useful to monitor your delivery company.

## Profit Report

The profit report allows you to extract a pdf document that summarises the profit of the company over a specific period of time.

To generate a profit report, specify the start and end date, then click **GENERATE REPORT**\
As soon as the report is generated, you will see a download button which you can click to download and view the profit report.

You can download a sample report from [here](https://drive.google.com/uc?export=download&id=1r2SY-PHSIH2BTP2wZZzHXkhsxB7lWOoI).

<div className="player-wrapper">
    <ReactPlayer className="react-player" width="100%"
      height="100%"  playing controls={false} url='https://youtu.be/YIqGwT76558' />
</div>

This report includes 3 pages.

### General Information Page

This page contains three sections.

The first section describes the orders that were delivered or cancelled over the selected period.\
The description includes the following:
- Number of orders
- Total Price: the sum of merchant's price of each order. 
- Total Delivery Fee: the sum of all delivery fees on all the orders.
- Total Driver Commission: the sum of all driver commission on all orders.
- Net Profit: how much profit you will get from these orders once payments are fully finalised. This is basically `Total Delivery Fee - Total Driver Commission`

The second section contains the same information included in the first section, but it only considers orders that were delivered on the selected period.

The third section contains the same information included in the first section, but it only considers orders that were cancelled on the selected period.

### Delivered Orders Page

This page gives more insights about the delivered orders.

It shows 3 histograms:
- Histogram 1: shows the number of uninvoiced, driver-invoiced and merchant-invoiced orders.
- Histogram 2: shows the total price, total delivery fee, and total driver commission for uninvoiced, driver-invoiced and merchant-invoiced orders separately. (Currency is $)
- Histogram 3: same as histogram 2, but currency is L.L.

### Cancelled Orders Page

The last page considers only cancelled orders, and shows the same information as in the delivered orders page.


## Delivery States

This section shows the number of orders in each delivery state.

- **Pending**: not yet approved by the delivery company. 
  - Orders created by merchants are created in the Pending state
  - Orders created by the delivery company is created in the approved state. 
  - A pending order can't be sent out for delivery, it should be first approved.
- **Approved**: packaged an ready for delivery by the driver.
- **In Transit**: on its way to the recepient.
- **Delivered**: delivered to the recepient.
- **Cancelled**: cancelled due to some reason (return, refund, lost, etc.)

## Payment States

This section shows the number of orders in each payment state.

- **Uninvoiced**: no payments are done so far.
- **Invoiced for driver**: the driver has paid the money to the delivery company.
- **Invoiced for merchant**: the delivery company has paid the money to the merchant.

:::danger Pay Attention
It is not possible to have inconsistent states in the system.\
For example, an order can't be `Pending` and `Invoiced For Driver` at the same time.\
If you try to do such modification to the order, the system will refuse to save the order.
:::


The following table shows the accepted order states:

| Delivery State | Payment State |
|----------------|---------------|
| Pending        | Uninvoiced    |
| Approved       | Uninvoiced    |
| In Transit     | Uninvoiced    |
| Delivered      | Any State     |
| Cancelled      | Any State     |




## Delivered Orders History

This is a histogram that shows the number of delivered/cancelled orders in each month of the current year.

## Targetted Regions

This is a pie chart that shows the percentage of orders going to each district/region.




