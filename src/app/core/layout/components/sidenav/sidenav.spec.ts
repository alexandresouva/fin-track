import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TestHelper } from '@testing/test-helper/test-helper';

import { Sidenav } from './sidenav';

function setup() {
  TestBed.configureTestingModule({
    imports: [Sidenav],
    providers: [provideRouter([])]
  });

  const fixture = TestBed.createComponent(Sidenav);
  const component = fixture.componentInstance;
  const testHelper = new TestHelper(fixture);

  fixture.detectChanges();

  return { fixture, component, testHelper };
}

describe('Sidenav', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  describe('template smoke', () => {
    it('should render at least one menu item', () => {
      const { testHelper } = setup();

      const menuItems = testHelper.queries.queryAll('sidenav-menu-item');

      expect(menuItems.length).toBeGreaterThan(0);
    });
  });
});
