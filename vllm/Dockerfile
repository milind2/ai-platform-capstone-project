FROM nvidia/cuda:12.4.1-devel-ubuntu22.04

RUN apt-get update && apt-get install -y \
    python3 python3-pip python3-venv git \
    && rm -rf /var/lib/apt/lists/*

RUN pip3 install --no-cache-dir vllm

ENV VLLM_USE_FLASHINFER_SAMPLER=0

EXPOSE 8000
ENTRYPOINT ["python3", "-m", "vllm.entrypoints.openai.api_server"]
CMD ["--model", "Qwen/Qwen2.5-3B-Instruct", "--port", "8000", "--max-model-len", "4096", "--gpu-memory-utilization", "0.85"]
