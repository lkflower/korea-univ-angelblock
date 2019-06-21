pragma solidity ^0.4.18;

contract AllocationContract {

    string public constant tokenName = "SEED_TOKEN_01";
    string public constant tokenSymbol = "ST01";
    uint8 public constant decimals = 0;
    mapping(address => uint) balanceOf;
    string title = ""; // 
    uint amount; // 
    address owner;
    
    function AllocationContract(string allocateTitle, uint allocationAmount) public {
        balanceOf[msg.sender] = 1 * 10 * allocationAmount;
        owner = msg.sender;
        title = allocateTitle;
        amount = allocationAmount;
    }
    
    function allocate() public returns (uint, uint, uint, uint) {
        require(msg.sender == owner);
        balanceOf[0xA5bf50b2ED15fcC85862c50658C66E6Deef44544] = balanceOf[msg.sender] / 2;
        balanceOf[0x06fCa62Ab491D9bcaF91F7a6797Ee0210f6fe5A2] = balanceOf[msg.sender] / 4;
        balanceOf[0x0bBeC3991ccc0f749F01b9DeD546cF29f46Cb83c] = balanceOf[msg.sender] / 4;
        
        balanceOf[msg.sender] -= balanceOf[0xA5bf50b2ED15fcC85862c50658C66E6Deef44544];
        balanceOf[msg.sender] -= balanceOf[0x06fCa62Ab491D9bcaF91F7a6797Ee0210f6fe5A2];
        balanceOf[msg.sender] -= balanceOf[0x0bBeC3991ccc0f749F01b9DeD546cF29f46Cb83c];
        
        return (balanceOf[msg.sender], 
        balanceOf[0xA5bf50b2ED15fcC85862c50658C66E6Deef44544], 
        balanceOf[0x06fCa62Ab491D9bcaF91F7a6797Ee0210f6fe5A2], 
        balanceOf[0x0bBeC3991ccc0f749F01b9DeD546cF29f46Cb83c]);
    }
    
    
}