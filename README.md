# CPAN Security Advisory CSAF

*This is a test repository for creating CSAF documents of CPANSA using [CSAF Perl toolkit module](https://github.com/giterlizzi/perl-CSAF).*


Repository structure:

- `cpan-security-advisory/*` - CPAN Security Advisory Database (briandfoy) - https://github.com/briandfoy/cpan-security-advisory
- `csaf/white` - CPANSA CSAF directory
	- `index.txt` - Index of CSAF documents
	- `changes.csv` - List of changes
	- `cpansa-csaf-feed-tlp-white.json` - ROLIE feed
- `util` - Utility
	- `rolie.conf` - Configuration file for `csaf-rolie` command
	- `cpansa-to-csaf` - Convert CPANSA in CSAF document

## See also

- https://docs.oasis-open.org/csaf/csaf/v2.0/os/csaf-v2.0-os.html
- https://github.com/briandfoy/cpan-security-advisory
- https://github.com/giterlizzi/perl-CSAF

## Copyright

- Copyright 2023-2024 © Giuseppe Di Terlizzi
