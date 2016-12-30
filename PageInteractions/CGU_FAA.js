var postal_code = arg.pin;
//Click on the Personal section
driver.findElement(By.cssSelector("div#edit-adviser-type label:nth-child(1)")).click();
//Click on the All Personal Products
driver.findElement(By.cssSelector("ul.personal-products li:nth-child(1)")).click();
//Enter the postal code
driver.findElement(By.cssSelector("#adviser_location")).sendKeys(postal_code);
