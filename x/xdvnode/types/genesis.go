package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		FileList:      []*File{},
		DocumentsList: []*Documents{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in file
	fileIdMap := make(map[uint64]bool)

	for _, elem := range gs.FileList {
		if _, ok := fileIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for file")
		}
		fileIdMap[elem.Id] = true
	}
	// Check for duplicated ID in documents
	documentsIdMap := make(map[uint64]bool)

	for _, elem := range gs.DocumentsList {
		if _, ok := documentsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for documents")
		}
		documentsIdMap[elem.Id] = true
	}

	return nil
}
