# agentic-skills-framework

A complete software development methodology for your coding agents, built on top of a set of composable skills and some initial instructions that make sure your agent uses them.

## Table of Contents

- [How it works](#how-it-works)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## How it works

The agentic-skills-framework starts from the moment you fire up your coding agent. As soon as it sees that you're building something, it doesn't just jump into trying to write code. Instead, it steps back and asks you what you're really trying to do.

## Installation

To get started, clone the repository and run the following commands:

```bash
git clone https://github.com/AvicenaIG/agentic-skills-framework.git
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Quick Start

Here's a minimal working example using the `register` function from the `_skills_dir` module:

```python
import os
from pathlib import Path

skills_dir = _skills_dir()
print(skills_dir)
```

## Usage

Here are a few real-world examples of how you can use the agentic-skills-framework:

```python
import os
from pathlib import Path

# Example 1: Using the _strip_frontmatter function
content = "This is a sample content with frontmatter."
stripped_content = _strip_frontmatter(content)
print(stripped_content)

# Example 2: Using the _build_bootstrap function
bootstrap_content = _build_bootstrap()
print(bootstrap_content)
```

## Configuration

The agentic-skills-framework has a few configuration options. You can customize them by setting the following environment variables:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| SKILLS_DIR | str |  | The directory where the skills are stored. |

## Contributing

If you'd like to contribute to the agentic-skills-framework, please fork the repository, make your changes, and submit a pull request.

## License

The agentic-skills-framework is licensed under the MIT License.

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Version

0.1.0

[![Version](https://img.shields.io/badge/Version-0.1.0-yellow.svg)](https://github.com/AvicenaIG/agentic-skills-framework)

## Language

Python

[![Language](https://img.shields.io/badge/Language-Python-yellow.svg)](https://www.python.org/)