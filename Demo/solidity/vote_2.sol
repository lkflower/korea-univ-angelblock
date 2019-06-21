pragma solidity ^0.4.18;

contract voteContract {

    mapping (address => bool) voters; // �ϳ��� ���� �� �� ���� ��ǥ�� ����
    mapping (string => uint) candidates; // �ĺ����� ��ǥ���� �����մϴ�.
    mapping (uint8 => string) candidateList; // �ĺ����� ����Ʈ�Դϴ�.

    uint8 numberOfCandidates; // �� �ĺ����� ���Դϴ�.
	

 
    // �ĺ��ڸ� �߰��ϴ� �Լ��Դϴ�.
    function addCandidate(string cand) public{
        bool add = true;
        for (uint8 i = 0; i < numberOfCandidates; i++) {
        
            // ���ڿ� �񱳴� �ؽ��Լ�(keccak256)�� ���ؼ� �� �� �ֽ��ϴ�.
            // �ָ���Ƽ���� ���ڿ� �񱳿� ���� Ư���� �Լ��� �����ϴ�.
            if(keccak256(candidateList[i]) == keccak256(cand)){
                add = false; break;
            }
        }

        if(add) {
            candidateList[numberOfCandidates] = cand;
            numberOfCandidates++;
        }
    }

    // ��ǥ�� �ϴ� �Լ��Դϴ�.
    function vote(string cand) public{
		require(!voters[msg.sender]);        
		voters[msg.sender] = true;            
		candidates[cand]++;       
  
	}


    // �̹� ��ǥ�ߴ��� Ȯ���մϴ�.
    function alreadyVoted() constant public returns(bool)  {
        return voters[msg.sender];
    }

    //�ĺ����� ���� �����մϴ�.
    function getNumOfCandidates() constant public returns(uint8) {
        return numberOfCandidates;
    }

    //��ȣ�� �ش��ϴ� �ĺ��� �̸��� �����մϴ�.
    function getCandidateString(uint8 number) constant public returns(string) {
        return candidateList[number];
    }

    //�ĺ��� ��ǥ���� �����մϴ�.
    function getScore(string cand) constant public returns(uint) {
        return candidates[cand];
    }

}