# CPAN Security Advisory CSAF

CPANSA (CPAN Security Advisory) in [CSAF](https://www.csaf.io/) 2.0 format.

Each advisory includes detailed information about vulnerabilities affecting CPAN modules, along with associated CVEs, CVSS scores, and links to external resources for further context. 

## OASIS CSAF 2.0 Standard

CSAF is a standard for machine-readable security advisories developed by the [OASIS CSAF Technical Committee](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=csaf). CSAF enables individuals and organizations to successfully disclose and consume security advisories in machine-readable format. The standard also specifies the distribution and discovery of CSAF documents. The CSAF Security Advisory files found in this repository were designed following the CSAF v2.0 standard published by ([OASIS Open](https://docs.oasis-open.org/csaf/csaf/v2.0/os/csaf-v2.0-os.html)). 

## Repository structure

- `csaf/white` - CPANSA CSAF directory
  - `index.txt` - Index of CSAF documents
  - `changes.csv` - List of changes
  - `cpansa-csaf-feed-tlp-white.json` - ROLIE feed

## Utility

- `Makefile`
- `util`
  - `rolie.yaml` - Configuration file for `csaf-rolie` command
  - `cpansa-to-csaf` - Convert CPANSA in CSAF document

## Makefile

Build Website:

```bash
make website
```

Build CSAF:

```bash
make csaf
```

Re-build CSAF:

```bash
make rebuild
```

ROLIE feed:

```bash
make rolie
```

Build CSAF + ROLIE + Website:

```bash
make all
```

### Usage

```console
$ make help
all             Generate CSAF feeds + ROLIE feed + Website
build           Generate or update CSAF feeds
clean           Delete CPANSA-CSAF website files
help            Show help for each of the Makefile recipes
install-deps    Install required CPAN modules
rebuild         Rebuild all CSAF feeds
rolie           Generate ROLIE feed
sbom            Generate bom.json file
website         Build CPANSA-CSAF website
```

## See also

- https://docs.oasis-open.org/csaf/csaf/v2.0/os/csaf-v2.0-os.html
- https://github.com/briandfoy/cpan-security-advisory
- https://github.com/giterlizzi/perl-CSAF
- https://giterlizzi.github.io

## Copyright

- Copyright 2023-2026 © Giuseppe Di Terlizzi
