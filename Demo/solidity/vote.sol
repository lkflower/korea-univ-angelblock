pragma solidity ^0.4.15;

contract VoteContract {

    string voteTitle = ""; // 투표 제목
    uint changeTabSizeRate = 100;  // 투표 결과로 변경할 Tab Size
    uint dueDate;   // 투표 마감일
    mapping(address => bool) isVoted;     // 투표여부
    uint agreeCount = 0; // 찬성
    uint disagreeCount = 0;  // 반대
    uint numberOfVoter = 3;
    

    function VoteContract(string title, uint due) public {
        voteTitle = title;
        dueDate = now + due * 1 days;
    }
    
    // 투표정보 
    function getVoteInfo() constant public returns (string, uint, uint, uint, uint, uint) {
        return (voteTitle, dueDate, numberOfVoter, agreeCount, disagreeCount, changeTabSizeRate);
    }
    
    
    // 투표 처리 
    function vote(bool opinion) public {
        require(now <= dueDate);
        require(isVoted[msg.sender] == false);
        
        opinion ? agreeCount++ : disagreeCount++;
        isVoted[msg.sender] = true;
        
        if (isComplete()) {
            if (agreeCount == numberOfVoter) {
                changeTabSizeRate = 120;
            } else if (agreeCount > disagreeCount) {
                changeTabSizeRate = 100;
            } else {
                changeTabSizeRate = 80;
            }
        }
    }
    
    // 투표 완료여부
    function isComplete() constant returns (bool) {
        return agreeCount + disagreeCount == numberOfVoter ? true : false;
    }
    
}