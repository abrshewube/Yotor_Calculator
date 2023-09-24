import { Component } from '@angular/core';

@Component({
  selector: 'app-subnet-calculator',
  templateUrl: './subnet-calculator.component.html',
  styleUrls: ['./subnet-calculator.component.css']
})
export class SubnetCalculatorComponent {
  ipDecimal: string = '';
  subnetDecimal: string = '';
  subnets: any[] = [];

  calculate() {
    const ipOctets = this.ipDecimal.split('.').map(octet => parseInt(octet, 10));
    const subnetOctets = this.subnetDecimal.split('.').map(octet => parseInt(octet, 10));

    const subnetMask = subnetOctets.reduce((mask, octet) => (mask << 8) + octet, 0);
    const totalHosts = 2 ** (32 - subnetMask);
    const hostsPerSubnet = totalHosts - 2;

    let networkAddress = [...ipOctets];
    let broadcastAddress = [...ipOctets];

    for (let i = 0; i < 4; i++) {
      networkAddress[i] &= subnetOctets[i];
      broadcastAddress[i] |= ~subnetOctets[i] & 0xFF;
    }

    this.subnets = [];
    for (let i = 0; i < totalHosts; i += hostsPerSubnet) {
      this.subnets.push({
        networkAddress: networkAddress.join('.'),
        broadcastAddress: broadcastAddress.join('.'),
        hosts: hostsPerSubnet
      });

      for (let j = 3; j >= 0; j--) {
        networkAddress[j]++;
        broadcastAddress[j]++;
        if (networkAddress[j] <= 255) {
          break;
        }
        networkAddress[j] = 0;
        broadcastAddress[j] = 255;
      }
    }
  }
}
