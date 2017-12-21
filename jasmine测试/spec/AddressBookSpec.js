describe('通讯录',function(){
	var addressBook,
		thisContact;

	beforeEach(function(){
		addressBook = new AddressBook();
		thisContact = new Contact();
	});
	it('应该能添加联系人',function(){
		addressBook.addContact(thisContact);
		expect(addressBook.getContact(0)).toBe(thisContact);
	});
	it('应该能删除联系人',function(){
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);
		expect(addressBook.getContact(0)).not.toBeDefined();
	});
});

describe('异步通讯录',function(){
	var addressBook = new AddressBook();

	beforeEach(function(done){
		addressBook.getInitialContacts(function(){
			done();
			//done会通知测试框架异步函数已经完成了工作，然后进行后续测试
		});
	});

	it('应该能获取初始联系人',function(done){
		expect(addressBook.initialComplete).toBe(true);
		done();
		//done告知测试框架这个测试用例依赖了异步函数
	});
});