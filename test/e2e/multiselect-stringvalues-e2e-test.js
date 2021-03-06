describe('Multiselect, using string models, ', function () {

    beforeEach(function () {

    });

    it('should be able to select multiple elements', function () {
        browser.get('test/e2e/test-stringvalues.html');

        var form = element(by.name('minimalTest'));
        form.element(by.className('dropdown-toggle')).click();
        var unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(4);
        var selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(0);

        unselectedItems.get(0).click();
        unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(3);
        selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(1);

        unselectedItems.get(0).click();
        unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(2);
        selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(2);
    });

    it('should be able to unselect elements', function () {
        browser.get('test/e2e/test-stringvalues.html');

        var form = element(by.name('minimalTest'));
        form.element(by.className('dropdown-toggle')).click();
        var unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(4);
        var selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(0);

        unselectedItems.get(0).click();
        unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(3);
        selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(1);

        selectedItems.get(0).click();
        unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(4);
        selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(0);
    });

    it('has a button to select and unselect everything at once', function () {
        browser.get('test/e2e/test-stringvalues.html');

        var form = element(by.name('allOptionsTest'));
        form.element(by.className('dropdown-toggle')).click();
        var unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(4);
        var selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(0);

        var selectAllButton = form.element(by.partialLinkText('Select All'));
        expect(selectAllButton.isDisplayed()).toBe(true);
        selectAllButton.click();

        unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(0);
        selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(4);

        var unselectAllButton = form.element(by.partialLinkText('Unselect All'));
        expect(unselectAllButton.isDisplayed()).toBe(true);
        unselectAllButton.click();

        unselectedItems = form.all(by.tagName('li')).all(by.className('item-unselected'));
        expect(unselectedItems.count()).toBe(4);
        selectedItems = form.all(by.tagName('li')).all(by.className('item-selected'));
        expect(selectedItems.count()).toBe(0);
    });

});
