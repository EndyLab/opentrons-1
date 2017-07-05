# opentrons-api
Python API for writing protocols and running them on Opentrons robots

## Endy Lab Development Environment
We are using conda virtual envs to make sure we all have the same development environment.

Using python 3.5 for opencv compatibility

```
conda create -n opentrons python=3.5 numpy pandas matplotlib jupyter
```

Use local copy of opentrons code in the virtual env.

```
source activate opentrons
cd opentrons-api/api
pip install -e .
```
