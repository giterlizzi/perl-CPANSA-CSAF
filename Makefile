# Makefile for CPANSA-CSAF

.DEFAULT_GOAL = help

DESTDIR = 
SHELL = /bin/sh
CHMOD = chmod
CP = cp
MV = mv
PERL = perl
NOOP = $(TRUE)
NOECHO = @
RM_F = rm -f
RM_RF = rm -rf
TOUCH = touch
UMASK_NULL = umask 0
DEV_NULL = > /dev/null 2>&1
FALSE = false
TRUE = true
ECHO = echo
ECHO_N = echo -n
MKDIR = mkdir
CSAF_ROLIE = csaf-rolie
CPANM = cpanm

website: clean ## Build CPANSA-CSAF website
	$(MKDIR) _site
	$(PERL) util/cpansa-to-html --csaf-index-file csaf/white/index.txt --output-directory _site
	$(CP) util/templates/app.* _site

build: ## Generate or update CSAF feeds
	$(PERL) util/cpansa-to-csaf

rebuild: ## Rebuild all CSAF feeds
	$(PERL) util/cpansa-to-csaf --force

rolie: ## Generate ROLIE feed
	$(CSAF_ROLIE) -c util/rolie.yaml

clean: ## Delete CPANSA-CSAF website files
	$(RM_RF) _site

install-deps: ## Install required CPAN modules
	$(CPANM) --installdeps --with-develop --notest .

all: install-deps build rolie website ## Generate CSAF feeds + ROLIE feed + Website
	$(NOECHO) $(NOOP)

sbom: ## Generate bom.json file
	cpan-sbom --project-directory .

.PHONY: help
help: ## Show help for each of the Makefile recipes
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'
