
ldflags =	-X github.com/cosmos/cosmos-sdk/version.ServerName=xdvnode 

BUILD_FLAGS := -ldflags '$(ldflags)'

all: install

install: go.sum
	@echo "--> Installing xdv-noded"
	@go install -mod=readonly $(BUILD_FLAGS) ./cmd/xdv-noded

go.sum: go.mod
	@echo "--> Ensure dependencies have not been modified"
	GO111MODULE=on go mod verify

test:
	@go test -mod=readonly $(PACKAGES)
