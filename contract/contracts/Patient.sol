pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract PatientRecords {
    struct Access {
        address user;
        bool access;
    }
    mapping(address => string[]) value;
    mapping(address => mapping(address => bool)) ownership;
    mapping(address => Access[]) accessList;
    mapping(address => mapping(address => bool)) previousData;

    function allow(address user) external {
        //def
        ownership[msg.sender][user] = true;
        if (previousData[msg.sender][user]) {
            for (uint i = 0; i < accessList[msg.sender].length; i++) {
                if (accessList[msg.sender][i].user == user) {
                    accessList[msg.sender][i].access = true;
                }
            }
        } else {
            accessList[msg.sender].push(Access(user, true));
            previousData[msg.sender][user] = true;
        }
    }
    function disallow(address user) public {
        ownership[msg.sender][user] = false;
        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if (accessList[msg.sender][i].user == user) {
                accessList[msg.sender][i].access = false;
            }
        }
    }
    function shareAccess() public view returns (Access[] memory) {
        return accessList[msg.sender];
    }

    struct Patient {
        address user_address;
        string username;
        string name;
        string gender;
        string dateOfBirth;
        string created_at;
    }
    Patient[] public patients;

    function addPatient(
        address _user_address,
        string memory _username,
        string memory _name,
        string memory _gender,
        string memory _dateOfBirth,
        string memory _created_at
    ) public {
        patients.push(
            Patient({
                user_address: _user_address,
                name: _name,
                username: _username,
                gender: _gender,
                dateOfBirth: _dateOfBirth,
                created_at: _created_at
            })
        );
    }

    struct Record {
        string id;
        address user_address;
        string title;
        uint256 date;
        string filename;
        string file;
        string created_at;
    }
    Record[] public records;

    function addRecord(
        string memory _id,
        address _user_address,
        string memory _title,
        uint256 _date,
        string memory _filename,
        string memory _file,
        string memory _created_at
    ) public {
        records.push(
            Record({
                id: _id,
                user_address: _user_address,
                title: _title,
                date: _date,
                filename: _filename,
                file: _file,
                created_at: _created_at
            })
        );
    }

    function getCount() public view returns (uint count) {
        return records.length;
    }
    function getPatientCount() public view returns (uint count) {
        return patients.length;
    }

    function getAllRecordsForAddress(
        address user_address
    ) public view returns (Record[] memory) {
        uint i;
        uint count = 0;
        for (i = 0; i < getCount(); i++) {
            if (records[i].user_address == user_address) {
                count++;
            }
        }

        Record[] memory userRecords = new Record[](count);
        count = 0;
        for (i = 0; i < getCount(); i++) {
            if (records[i].user_address == user_address) {
                userRecords[count] = records[i];
                count++;
            }
        }
        return userRecords;
    }
}
