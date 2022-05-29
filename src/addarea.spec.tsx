import { test, expect } from '@playwright/experimental-ct-react';
import { AddArea } from './components/AddArea/index';


test('should work', async ({ mount }) => {
  const component = await mount(<AddArea onEnter={function (taskName: string): void {
    throw new Error('Function not implemented.');
  } }></AddArea>);
  await expect(component).toContainText('➕');
});

test('should clear text input after submit new todo item',async ({ mount, page }) => {
  let setTaskName = '';
  const component = await mount(<AddArea onEnter={function (taskName: string): void {
    setTaskName = taskName;
  } }></AddArea>);

  await component.locator('css=input').fill('Take lunch with my team');
  await page.keyboard.press('Enter');
  await expect(component.locator('css=input')).toHaveValue('');
});

test('should able to fill the new todo item',async ({ mount, page }) => {
  let setTaskName = '';
  const component = await mount(<AddArea onEnter={function (taskName: string): void {
    setTaskName = taskName;
  } }></AddArea>);

  await component.locator('css=input').fill('Take lunch with my team');
  await page.keyboard.press('Enter');
  expect(setTaskName).toEqual('Take lunch with my team');
});
