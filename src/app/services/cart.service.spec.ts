import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

//Tests the CartService class of the cart/service.ts file 

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
