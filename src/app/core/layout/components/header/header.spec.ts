import { TestBed } from '@angular/core/testing';

import { TestHelper } from '@testing/test-helper/test-helper';

import { Header } from './header';

function setup() {
  TestBed.configureTestingModule({
    imports: [Header]
  });

  const fixture = TestBed.createComponent(Header);
  const component = fixture.componentInstance;
  const testHelper = new TestHelper(fixture);

  fixture.detectChanges();

  return { fixture, component, testHelper };
}

describe('Header', () => {
  it('should create', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  describe('menu toggle', () => {
    it('should emit menuToggle when menu button is clicked', () => {
      const { component, fixture, testHelper } = setup();

      spyOn(component.menuToggle, 'emit');

      testHelper.trigger.click('header-menu-button');
      fixture.detectChanges();

      expect(component.menuToggle.emit).toHaveBeenCalled();
    });
  });
});
