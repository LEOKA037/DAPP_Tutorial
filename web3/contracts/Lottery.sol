pragma solidity >=0.7.0 <0.9.0;

contract Lottery{

    //variable to store manager
    address public manager;
    //"0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

    // string public message;

    address payable[] public participants;

    constructor() {
        //message = "Hello DAPP";
        manager = msg.sender;
    }

    function enterLottery() public payable {
        require(msg.value > 5 ether);
        participants.push(payable(msg.sender));
    }

    function pickWinner() public payable{
        require(msg.sender == manager);

        uint index = random() % participants.length;

        participants[index].transfer(address(this).balance);

        participants = new address payable[](0);
    }

    function random() private view returns(uint256){
      return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, participants)));
    }
}
