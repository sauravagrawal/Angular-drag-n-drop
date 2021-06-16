import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  obj: any = [];

  constructor() {}

  cardData() {
    this.obj = [
      {
        orderType: 'Open',
        processId: 1,
        orderId: 871,
        paymentStatus: 'PAYMENT DUE',
        tags: ['WASHING', 'RASHID'],
        modelNo: 'AurisTR345',
        userName: 'Ahmed',
        repairOrder: 'Repair Order',
        invoice: 'Invoice',
        invoiceNo: 'GP-LCVUZK-683',
        watsApp: 'WhatsApp',
        createdBy: 'VIDYUT',
        completionDate: '28 FEB 2021 02:54 PM',
        totalAmt: 'AED 799.05',
        amtDue: 'AED 299',
      },
     
    ];
    return this.obj;
  }
}
