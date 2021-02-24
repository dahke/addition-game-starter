pragma solidity ^0.4.24;

contract AdditionGame {
    address public owner;

    constructor() public {
        // msg.sender는 현재 이 컨트랙을 호출하고 있는 계정을 말함
        owner = msg.sender;
    }
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function deposit() public payable {  
        // 유효성 체크
        require(msg.sender == owner);
    }   
  
    function transfer(uint _value) public returns (bool) {
        require(getBalance() >= _value);
        msg.sender.transfer(_value);
        return true;
    }
}
