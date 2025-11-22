PROJECT=portfolio
DC=docker compose
DEV_IMAGE=portfolio-dev
PROD_IMAGE=portfolio-prod

start:
	$(DC) up -d

build:
	$(DC) build

install:
	$(DC) run --rm $(DEV_IMAGE) pnpm install --frozen-lockfile

exec:
	$(DC) exec portfolio-dev sh

serve:
	$(DC) run --rm -p 5173:5173 portfolio-dev pnpm dev --host 0.0.0.0

stop:
	$(DC) down

logs:
	$(DC) logs -f

clean:
	$(DC) down --volumes --remove-orphans
	docker system prune -f

rebuild:
	$(DC) build --no-cache
	$(DC) up -d

test:
	$(DC) run --rm $(DEV_IMAGE) pnpm test

