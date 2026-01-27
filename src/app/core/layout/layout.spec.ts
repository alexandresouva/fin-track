import { TestBed } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';

import { TestHelper } from '@testing/test-helper/test-helper';
import { MockComponents } from 'ng-mocks';

import { Header } from './components/header/header';
import { Sidenav } from './components/sidenav/sidenav';
import { Layout } from './layout';

function setup() {
  TestBed.configureTestingModule({
    imports: [Layout, MockComponents(Header, Sidenav)]
  });

  const fixture = TestBed.createComponent(Layout);
  const component = fixture.componentInstance;
  const testHelper = new TestHelper(fixture);
  fixture.detectChanges();

  return { fixture, component, testHelper };
}

describe('Layout', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  describe('layout structure', () => {
    it('renders header component', () => {
      const { testHelper } = setup();

      const headerEl = testHelper.queries.query('header');
      expect(headerEl).toBeTruthy();
    });

    it('renders sidenav with app-sidenav inside', () => {
      const { testHelper } = setup();

      const sidenav = testHelper.queries.query('sidenav');
      expect(sidenav).toBeTruthy();

      const appSidenav = testHelper.queries.query('app-sidenav', sidenav!);
      expect(appSidenav).toBeTruthy();
    });
  });

  describe('when menuToggle is emitted', () => {
    it('should open and close sidenav', () => {
      const { fixture, testHelper } = setup();

      const headerEl =
        testHelper.queries.getComponentInstance<Header>('header');
      const sidenavEl =
        testHelper.queries.getComponentInstance<MatSidenav>('sidenav');

      const emitToggle = () => {
        headerEl?.menuToggle.emit();
        fixture.detectChanges();
      };

      expect(sidenavEl?.opened).toBeFalse();

      emitToggle();
      expect(sidenavEl?.opened).toBeTrue();

      emitToggle();
      expect(sidenavEl?.opened).toBeFalse();
    });
  });
});
